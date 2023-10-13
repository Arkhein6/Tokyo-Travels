import Place from '../assets/pexels-dlkr-9994326.jpg'

type showcaseItemsProps = {
  place: string,
  imageSource: string,
  description: string

}


const showcaseItems: showcaseItemsProps[] = [
  {
    place: "museum",
    imageSource: Place,
    description: "lorem Ipsum Generum Ipsum"
  },{
    place: "museum",
    imageSource: Place,
    description: "lorem Ipsum Generum Ipsum"
  },{
    place: "museum",
    imageSource: Place,
    description: "lorem Ipsum Generum Ipsum"
  },{
    place: "museum",
    imageSource: Place,
    description: "lorem Ipsum Generum Ipsum"
  },
]
const Content = () => {
  return (
    <div className=" h-screen w-screen">
      <div>
        <div>
          <p>Lorem Ipsum Generum Datum Polinia</p>
          <h2>Lorem Generum Ipsum</h2>
        </div>
      </div>
      <div>
        {
          showcaseItems.map((current) => {
            return (
              <div>
                <img src={current.imageSource} />
                <div>
                  <p>{current.place}</p>
                  <p>{current.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Content