import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selectos'

import './collection.styles.scss'

const CollectionPage = ({ collection }) => {
  const { title, items} = collection
  console.log(typeof(collection));
  return (
  <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
      }
    </div>
  </div>
  )
}

const mapStateToProps = (state, { match }) => ({
  collection: selectCollection(match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage)