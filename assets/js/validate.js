$(document).ready(
    () => {
        const contactForm = $('#contactForm');

        contactForm.validate(
            {
                debug: false,
                rules: {
                    name: {
                        required: true,
                        minlength: 3,
                        maxlength: 128
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true,
                        minlength: 8,
                        maxlength: 128
                    },
                    message: {
                        required: true,
                        minlength: 14,
                        maxlength: 1060
                    }
                },
                messages: {
                    name: {
                        required: 'O nome é obrigatório.',
                        minlength: () => {
                            const minLength = contactForm.validate().settings.rules.name.minlength;
                            return `O nome deve conter no mínimo ${minLength} caracteres.`;
                        },
                        maxlength: () => {
                            const maxLength = contactForm.validate().settings.rules.name.maxlength;
                            return `O nome deve conter no máximo ${maxLength} caracteres.`;
                        }
                    },
                    email: {
                        required: 'O endereço de e-mail é obrigatório.',
                        email: 'Informe um endereço de e-mail válido'
                    },
                    subject: {
                        required: 'O assunto é obrigatório.',
                        minlength: () => {
                            const minLength = contactForm.validate().settings.rules.subject.minlength;
                            return `O assunto deve conter no mínimo ${minLength} caracteres.`;
                        },
                        maxlength: () => {
                            const maxLength = contactForm.validate().settings.rules.subject.maxlength;
                            return `O assunto deve conter no máximo ${maxLength} caracteres.`;
                        }
                    },
                    message: {
                        required: 'A mensagem é obrigatória.',
                        minlength: () => {
                            const minLength = contactForm.validate().settings.rules.message.minlength;
                            return `A mensagem deve conter no mínimo ${minLength} caracteres.`;
                        },
                        maxlength: () => {
                            const maxLength = contactForm.validate().settings.rules.message.maxlength;
                            return `A mensagem deve conter no máximo ${maxLength} caracteres.`;
                        }
                    }
                },
                errorPlacement: (error, element) => {
                    const errorAlertComponent = $('<div class="alert alert--danger mt--12"></div>');
                    errorAlertComponent.append(error);
                    errorAlertComponent.insertAfter(element);
                },
                success: (label, element) => {
                    $(element).next('.alert').remove();
                },
                submitHandler: (form) => {
                    form.submit();
                },
                onkeyup: (element) => {
                    $(element).valid();
                },
                onfocusout: (element) => {
                    $(element).valid();
                },
                onclick: (element) => {
                    $(element).valid();
                }
            }
        );
    }
);