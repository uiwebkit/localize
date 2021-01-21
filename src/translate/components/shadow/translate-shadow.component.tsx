import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { uniTranslateShadowInit } from '../../utils/translate-shadow.init';
import { UniTranslateTemplate } from '../../utils/translate.template';

@Component({
  tag: 'uni-translate-shadow',
  shadow: true,
})
export class UniTranslateShadowComponent implements ComponentInterface {

  @Prop({ reflect: true, mutable: true }) active: boolean = false;

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) type: UniStoreType;

  @Prop({ reflect: true }) path = 'app.loc.translate';

  @Prop({ reflect: true }) start: string = '{{';

  @Prop({ reflect: true }) end: string = '}}';

  render(): VNode {
    const { active, feature, separator, type, path, start, end } = this;
    const props = { active, feature, separator, type, path, start, end };

    if (this.active) {
      setTimeout(() => this.active = false);
    }

    return UniTranslateTemplate({ props }, <slot />);
  }

  componentDidLoad(): void {
    uniTranslateShadowInit();
  }
}
