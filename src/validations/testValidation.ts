import Joi from 'joi';

function newTest(test: any): boolean {
    const schema = Joi.object({
        name: Joi.string().pattern(/^[0-9]{4}.*/).required(),
        categoryId: Joi.number().integer().min(1).required(),
        subjectId: Joi.number().integer().min(1).required(),
        teacherId: Joi.number().integer().min(1).required(),
        url: Joi
            .string()
            // eslint-disable-next-line no-useless-escape
            .pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
            .required(),
    });
    return !!schema.validate(test).error;
}

export {
    newTest,
};
