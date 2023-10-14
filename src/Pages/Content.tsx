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
    <div className="CONTENT h-screen w-screen bg-yellow-200 flex flex-col items-center justify-center gap-6">
      <div>
        <div>
          <p className='text-center text-white text-sm'>Lorem Ipsum Generum Datum Polinia</p>
          <h2 className='text-center text-white text-2xl'>Lorem Generum Ipsum</h2>
        </div>
      </div>
      <div className='flex w-[80%] justify-between '>
        {
          showcaseItems.map((current) => {
            return (
              <div className="relative">
                <img className="w-[260px] h-[350px]  " src={current.imageSource} />
                <div className=" absolute bottom-0 w-[100%] z-20 before:absolute before:content-[''] before:w-full before:h-full before:bg-black/50 before:blur-lg before:inset-0 before:-z-30 ">
                  <p className='text-center text-white'>{current.place}</p>
                  <p className='text-center text-white'>{current.description}</p>
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