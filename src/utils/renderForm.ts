import { ResultTypeEnum } from '~/models/ResultTypeEnum';

export const renderForm = ((form: ResultTypeEnum[], showLimit: number): string => {
  const limitedForm = form.length > showLimit ? form.slice(Math.max(form.length - showLimit, 1)) : form;

  return  limitedForm.reduce((formList: string, result: ResultTypeEnum) => {
    return formList += `<span class="form-block--${result}">${result}</span>`;
  }, '');
});
