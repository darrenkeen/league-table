import { ResultTypeEnum } from '~/models/ResultTypeEnum';
import { renderForm } from './renderForm';

describe('renderForm()', () => {
  let form: ResultTypeEnum[] = [ResultTypeEnum.Win, ResultTypeEnum.Draw, ResultTypeEnum.Lose];

  it(`should return last 3 form`, () => {
    const output: string = `<span class="form-block--W">W</span>
    <span class="form-block--D">D</span>
    <span class="form-block--L">L</span>`;
    expect(renderForm(form, 5)).toEqual(output.replace(/>\s+</g, '><'));
  });

  it(`should return only the last 5`, () => {
    form = [
      ResultTypeEnum.Draw,
      ResultTypeEnum.Draw,
      ResultTypeEnum.Lose,
      ResultTypeEnum.Lose,
      ResultTypeEnum.Lose,
      ResultTypeEnum.Draw,
      ResultTypeEnum.Win,
    ];
    const output: string = `<span class="form-block--L">L</span>
      <span class="form-block--L">L</span>
      <span class="form-block--L">L</span>
      <span class="form-block--D">D</span>
      <span class="form-block--W">W</span>`;

    expect(renderForm(form, 5)).toEqual(output.replace(/>\s+</g, '><'));
  });
});
