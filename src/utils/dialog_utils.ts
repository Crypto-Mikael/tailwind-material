import { MdButtonType } from "../types";

export type ICON_COLOR = string;
export type DIALOG_ICON =
  | "warning"
  | "error"
  | "check_circle"
  | "help"
  | string;
export type ICON_HERO_DIALOG = {
  /** This is the hero icon on top of the modal */
  icon?: DIALOG_ICON;
  iconColor?: ICON_COLOR;
};

export type BASIC_DIALOG = {
  /** This is the header to the modal */
  title: string;
  /** This is the body text to the modal */
  article: string;
  width?: `${number}px` | `${number}rem`;
};

export type SUCCESS_DIALOG = ICON_HERO_DIALOG & {
  /** This is the header to the modal */
  title?: (typeof SUCCESS_TITLE)[keyof typeof SUCCESS_TITLE];
  /** This is the body text to the modal */
  article: string;
  width?: `${number}px` | `${number}rem`;
};

export type ERROR_DIALOG = ICON_HERO_DIALOG & {
  /** This is the header to the modal */
  title?: (typeof ERROR_TITLE)[keyof typeof ERROR_TITLE];
  /** This is the body text to the modal */
  article: string;
  width?: `${number}px` | `${number}rem`;
};

export type SUCCESS_TITLE_TYPE =
  (typeof SUCCESS_TITLE)[keyof typeof SUCCESS_TITLE];
export type ERROR_TITLE_TYPE = (typeof ERROR_TITLE)[keyof typeof ERROR_TITLE];

const SUCCESS_TITLE = {
  "pt-BR": "Sucesso !",
  "en-US": "Success !",
} as const;

const ERROR_TITLE = {
  "pt-BR": "Erro !",
  "en-US": "Error !",
} as const;

export class MdDialog {
  public static showTimedSuccessDialog(props: SUCCESS_DIALOG) {
    return new Promise((resolve) => {
      const dialog = this.successDialog(props);
      dialog.showModal();
      setTimeout(() => {
        resolve(true);
        dialog.close();
      }, 4000);
    });
  }

  public static showSuccessDialog(
    props: SUCCESS_DIALOG & { buttonText?: string }
  ) {
    return new Promise((resolve) => {
      const dialog = this.successDialog(props);
      dialog.showModal();
      const button = this.appendButtonElement(
        dialog,
        props.buttonText,
        "md-button-filled"
      );
      button.style.width = "100%";
      button.onclick = () => {
        resolve(true);
        dialog.close();
      };
    });
  }

  public static showTimedErrorDialog(props: ERROR_DIALOG) {
    return new Promise((resolve) => {
      const dialog = this.errorDialog(props);
      dialog.showModal();
      setTimeout(() => {
        resolve(false);
        dialog.close();
      }, 1522000);
    });
  }

  public static showErrorDialog(props: ERROR_DIALOG & { buttonText?: string }) {
    return new Promise((resolve) => {
      const dialog = this.errorDialog(props);
      dialog.showModal();
      const button = this.appendButtonElement(
        dialog,
        props.buttonText,
        "md-button-outlined"
      );
      button.style.width = "100%";
      button.onclick = () => {
        resolve(false);
        dialog.close();
      };
    });
  }

  public static showTwoButtonOptionsDialog(
    props: ICON_HERO_DIALOG &
      BASIC_DIALOG & { confirmButtonText?: string; cancelButtonText?: string }
  ) {
    return new Promise((resolve) => {
      const dialog = this.dialogWithHeroIcon(props, "4rem");
      dialog.showModal();
      const actions = document.createElement("div");
      actions.className = "flex gap-4";
      dialog.appendChild(actions);

      const cancelButton = this.appendButtonElement(
        actions,
        props.cancelButtonText ?? "NÃO",
        "md-button-outlined"
      );
      cancelButton.style.width = "100%";
      cancelButton.onclick = () => {
        resolve(false);
        dialog.close();
      };

      const confirmButton = this.appendButtonElement(
        actions,
        props.confirmButtonText ?? "SIM",
        "md-button-filled"
      );
      confirmButton.style.width = "100%";
      confirmButton.onclick = () => {
        resolve(true);
        dialog.close();
      };
    });
  }

  public static async showTimedDialog(props: BASIC_DIALOG) {
    const dialog = this.basicDialog(props);
    dialog.showModal();
    setTimeout(() => dialog.close(), 4000);
  }

  // ROOT DIALOG ELEMENTS
  private static successDialog(props: SUCCESS_DIALOG) {
    const language = navigator.language as keyof typeof SUCCESS_TITLE;
    props.title = props.title ?? SUCCESS_TITLE[language];
    props.icon = props.icon ?? "check_circle";
    props.iconColor = props.iconColor ?? "text-primary";
    const dialog = this.dialogWithHeroIcon(props, "4rem");
    return dialog;
  }

  private static errorDialog(props: ERROR_DIALOG) {
    const language = navigator.language as keyof typeof ERROR_TITLE;
    props.title = props.title ?? ERROR_TITLE[language];
    props.icon = props.icon ?? "error";
    props.iconColor = props.iconColor ?? "text-error";
    const dialog = this.dialogWithHeroIcon(props, "4rem");
    return dialog;
  }

  private static dialogWithHeroIcon(
    props: ICON_HERO_DIALOG,
    iconSize: `${number}px` | `${number}rem`
  ) {
    const dialog = this.basicDialog(props as BASIC_DIALOG);
    const div = dialog.querySelector("div") as HTMLDivElement;
    const span = this.apppendMaterialHeroIconElement(
      div,
      props.icon,
      props.iconColor
    );
    span.style.fontSize = iconSize;
    span.style.display = "flex";
    span.style.flexDirection = "column";
    span.style.justifyContent = "center";
    span.style.height = iconSize;
    return dialog;
  }

  private static basicDialog(props: BASIC_DIALOG) {
    const dialog = this.createElementDialog(props.width);
    dialog.style.display = "flex";
    dialog.style.flexDirection = "column";
    dialog.style.justifyContent = "space-between";
    const div = document.createElement("div");
    div.className = "flex flex-col gap-4 grow items-center";
    dialog.appendChild(div);
    const div2 = document.createElement("div");
    div2.className = "flex flex-col grow items-center w-max";
    div.appendChild(div2);
    const header = this.apppendHeaderElement(div2);
    this.apppendHeadingElement(header, props.title);

    this.apppendArticleElement(div2, props.article);
    dialog.onclose = () => {
      dialog.remove();
    };
    return dialog;
  }

  private static createElementDialog(
    width: `${number}px` | `${number}rem` | "min-content" = "min-content"
  ) {
    const dialog = document.createElement("dialog") as HTMLDialogElement;
    const className = `md-dialog transition ease-in-out`;
    dialog.style.width = width;
    dialog.style.minWidth = "300px";
    document.body.appendChild(dialog);
    dialog.className = className;
    return dialog;
  }

  private static apppendHeaderElement(dialog: HTMLElement) {
    const header = document.createElement("header") as HTMLHeadingElement;
    header.className = "flex justify-between self-center w-max";
    dialog.appendChild(header);
    return header;
  }

  private static apppendArticleElement(dialog: HTMLElement, innerText: string) {
    const article = document.createElement("article") as HTMLElement;
    article.className =
      "flex text-on-surface-variant min-h-[80px] max-w-screen-sm";
    article.innerText = innerText;
    dialog.appendChild(article);
    return article;
  }

  private static apppendHeadingElement(
    element: HTMLElement,
    innerText: string
  ) {
    const heading = document.createElement("h1");
    heading.className = "text-2xl";
    heading.innerText = innerText;
    element.appendChild(heading);
    return heading;
  }

  private static apppendMaterialHeroIconElement(
    element: HTMLElement,
    innerText: DIALOG_ICON = "help",
    iconColor: ICON_COLOR = "text-primary"
  ) {
    const span = document.createElement("span");
    span.className = `font-['Material_Symbols_Outlined'] flex self-center text-sm`;
    span.classList.add(iconColor);
    span.innerText = innerText;
    element.prepend(span);
    return span;
  }

  private static appendButtonElement(
    element: HTMLElement,
    innerText = "OK",
    buttonType: MdButtonType = "md-button"
  ) {
    const button = document.createElement("button") as HTMLButtonElement;
    button.className = "self-end mt-4";
    button.classList.add(buttonType);
    button.innerHTML = innerText;
    element.appendChild(button);
    return button;
  }
}
