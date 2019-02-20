import React from 'react'
import homePage from '../img/unimacts/homage-page.png'
import categoryIndex from '../img/unimacts/category-index.png'
import categorySubIndex from '../img/unimacts/category-sub-index.png'

export const FixedImagePreviewTemplate = () => {
  return (
    <div style={{marginTop: '10px', marginLeft: '30px'}}>
      <div style={{marginLeft: '30px', fontSize: '30px', textDecoration: 'underline'}}> HomePage: </div>
      <img src={homePage} />

      <br/><br/>

      <div style={{marginLeft: '30px', fontSize: '30px', textDecoration: 'underline'}}> Category Index Page: </div>
      <img src={categoryIndex} />

      <br/><br/>

      <div style={{marginLeft: '30px', fontSize: '30px', textDecoration: 'underline'}}> Category Sub-Index Page: </div>
      <img src={categorySubIndex} />
    </div>
  )
}

const FixedImagePreview = () => {
  return (
    <FixedImagePreviewTemplate />
  )
}

export default FixedImagePreview
