type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

type inputName = keyof FormValues;

interface Input {
    name: inputName;
    type: string;
    placeholder: string;
    requiredMessage: string;
    pattern: string;
    patternParams: {
        value: RegExp;
        message: string;
    }
}

type Props = {
    showPopup(): void;
}

export type { FormValues, Input, Props };





