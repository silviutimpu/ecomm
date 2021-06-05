const INITIAL_STATE= {
    sections: [
        {
          title: 'gaming',
          imageUrl: 'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80',
          id: 1,
          linkUrl: 'shop/gaming'
        },
        {
          title: 'periferice',
          imageUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80',
          id: 2,
          linkUrl: 'shop/periferice'
        },
        {
          title: 'ultrabook',
          imageUrl: 'https://images.unsplash.com/photo-1589561190002-96f5462f81e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80',
          id: 3,
          linkUrl: 'shop/ultrabook'
        },
        {
          title: 'laptop',
          imageUrl: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80',
          size: 'large',
          id: 4,
          linkUrl: 'shop/laptop'
        },
        {
          title: 'desktop',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/03/09/09/17/desktop-1245714_960_720.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/desktop'
        }
      ]

}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
} 

export default directoryReducer;