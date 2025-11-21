import './App.css'

function App() {

  return (
    <>
      <h1 className="text-5xl text-white text-center font-bold">YOU'R QUOTA</h1>
      <div className='bg-white bg-opacity-10 p-4 rounded-lg mt-6 w-96'>
        <form>
          <div className="p-6">
            <hr className="my-4 w-1/2 mx-auto rounded border-2 border-gray-300/80" />
              <h1 className=" text-black text-sm text-center font-bold mb-2">
                SOUNDS
              </h1>

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="numberofGuests"
                  type="number"
                  placeholder="Enter number of expected guests"
                />
            <hr className="my-4 w-1/2 mx-auto rounded border-2 border-gray-300/80" />
          </div>
        </form>
      </div>
    </>
  )
}

export default App
