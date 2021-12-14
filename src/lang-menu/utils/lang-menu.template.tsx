import { Fragment, h, VNode } from '@stencil/core';

import { uniLangItemRoutingLiteral } from './routing.literal';
import { uniLangItemStoreLiteral } from './store.literal';

export const UniLangMenuTemplate = function(data, storeData): VNode {
  const { list, mini, round, mode, routing, route, languagesPath, activePath, translatePath, isShadow } = data;
  const { top, shadow, frame, type, feature, separator } = storeData;

  return (
    <Fragment>
      <uni-menu selector={'uni-menu-surface'} class='uni-lang-menu'>
        <uni-lang-menu-button
          mini={mini}
          round={round}
          mode={mode}
          top={top}
          type={type}
          feature={feature}
          separator={separator}
          activePath={activePath}
        />

        <uni-menu-surface>
          <uni-list-wrap pro={true}>
            <ul>
              <uni-event-store-get
                top={top}
                type={type}
                feature={feature}
                separator={separator}
                path={languagesPath}
                prop={'state'}
              >
                <uni-repeat strict={true} value={routing
                  ? uniLangItemRoutingLiteral({ route, round, activePath, isShadow }, storeData)
                  : uniLangItemStoreLiteral({ round, activePath, isShadow }, storeData)} />
              </uni-event-store-get>
            </ul>
          </uni-list-wrap>
        </uni-menu-surface>
      </uni-menu>

      <uni-load-store
        multi={true}
        top={top}
        shadow={isShadow}
        frame={frame}
        type={type}
        feature={feature}
        separator={separator}
        path={languagesPath}
        url={list}
      />

      <uni-event-store-get
        top={top}
        type={type}
        feature={feature}
        separator={separator}
        path={`${languagesPath}[0]`}
        prop={'state'}
      >
        <uni-store-set
          top={top}
          shadow={isShadow}
          frame={frame}
          type={type}
          feature={feature}
          separator={separator}
          mode={'init'}
          path={activePath}
        />
      </uni-event-store-get>

      <uni-event-store-get
        top={top}
        type={type}
        feature={feature}
        separator={separator}
        path={`${activePath}.translation`}
        prop={'url'}
      >
        <uni-load-store
          multi={true}
          top={top}
          shadow={shadow}
          frame={frame}
          mode={'set'}
          feature={feature}
          separator={separator}
          path={translatePath}
        />
      </uni-event-store-get>
    </Fragment>
  ) as VNode;
};
