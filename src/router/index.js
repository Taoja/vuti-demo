import splitter from 'dividing/bin/splitter'

var routes = [{
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    name: '/home',
    component: () => {
      return splitter('base/home/index')
    }
  }
]

export default routes