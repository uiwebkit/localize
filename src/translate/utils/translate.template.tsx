import { h, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

export const UniTranslateTemplate = function({ props }, template: VNode): VNode {
  const { refresh, inactive, feature, separator, type, path, start, end } = props;

  return UniTemplate(
    <uni-event-store-get
      feature={feature}
      separator={separator}
      type={type}
      path={path}
      selector='uni-replace'
      prop='state'
    >
      <uni-replace
        refresh={refresh}
        inactive={inactive}
        start={start}
        end={end}
      >
        {template}
      </uni-replace>
    </uni-event-store-get>
  );
};
