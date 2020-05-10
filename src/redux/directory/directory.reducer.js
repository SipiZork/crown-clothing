const INITTIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      size: 'normal',
      linkUrl: 'shop/hats',
      id: 1
    },
    {
      title: 'jackets',
      imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      size: 'normal',
      linkUrl: 'shop/jackets',
      id: 2
    },
    {
      title: 'sneakers',
      imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      size: 'normal',
      linkUrl: 'shop/sneakers',
      id: 3
    },
    {
      title: 'womens',
      imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'shop/womens',
      id: 4
    },
    {
      title: 'mens',
      imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      linkUrl: 'shop/mens',
      id: 5
    }
  ]
}

const directoryReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer