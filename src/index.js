import iconSVG from '@plone/volto/icons/summary.svg';
import View from './View';
import Edit from './Edit';


const applyConfig = (config) => {
  config.blocks.blocksConfig.ModalButton = {
    id: 'ModalButton',
    title: 'Modal Button',
    icon: iconSVG,
    group: 'common',
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  return config;
};

export default applyConfig;

