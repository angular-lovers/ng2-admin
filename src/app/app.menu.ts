export const menuItems = [
  {
    title: 'Dashboard',
    component: 'Dashboard',
    icon: 'ion-android-home',
    selected: false,
    expanded: false,
    order: 0
  },
  {
    title: 'Editors',
    component: 'Editors',
    icon: 'ion-edit',
    order: 100,
    subMenu: [
      {
        title: 'CKEditor',
        component: 'Ckeditor'
      }
    ]
  },
  {
    title: 'UI Features',
    component: 'Ui',
    icon: 'ion-android-laptop',
    selected: false,
    expanded: false,
    order: 300,
    subMenu: [
      {
        title: 'Typography',
        component: 'Typography',
      },
      {
        title: 'Buttons',
        component: 'Buttons',
      },
      {
        title: 'Icons',
        component: 'Icons',
      },
      {
        title: 'Grid',
        component: 'Grid',
      },
    ]
  },
  {
    title: 'Form Elements',
    component: 'Forms',
    icon: 'ion-compose',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Form Inputs',
        component: 'Inputs',
      },
      {
        title: 'Form Layouts',
        component: 'Layouts',
      },
    ]
  },
  {
    title: 'Tables',
    component: 'Tables',
    icon: 'ion-grid',
    selected: false,
    expanded: false,
    order: 500,
    subMenu: [
      {
        title: 'Basic Tables',
        component: 'BasicTables',
      }
    ]
  },
  {
    title: 'Pages',
    icon: 'ion-document',
    selected: false,
    expanded: false,
    order: 650,
    subMenu: [
      {
        title: 'Login',
        url: '#/login',
      },
    ]
  },
  {
    title: 'Menu Level 1',
    icon: 'ion-ios-more',
    selected: false,
    expanded: false,
    order: 700,
    subMenu: [
      {
        title: 'Menu Level 1.1',
        url: '#',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Menu Level 1.2',
        url: '#',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      }
    ]
  },
  {
    title: 'External Link',
    url: 'http://akveo.com',
    icon: 'ion-android-exit',
    selected: false,
    expanded: false,
    order: 800,
    target: '_blank'
  }
];
