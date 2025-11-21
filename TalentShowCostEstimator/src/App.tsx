import { useState } from 'react'
import './App.css'
function App() {

  const [guests, setGuests] = useState<number>(0)

  const handleGuestsSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = Number(e.target.value)
    setGuests(v)
  }

  return (
    <>
      <h1 className="text-5xl text-white text-center font-bold">YOU'R QUOTA</h1>
      <div className='bg-black/40 p-4 rounded-lg mt-6 w-96 backdrop-blur-sm border border-white/10'>
        <form>
          <div className="p-6">
            <div>
                <h1 className="text-2xl text-white/90 text-center font-bold">VENUE</h1>
                <hr className="mb-4 w-1/4 mx-auto border-t-2 border-gray-200/40" />
                <label htmlFor="numberofGuests" className='text-gray-200 text-lg'>
                  Expected Guests:</label>
                <select
                  title="Expected Guests"
                  className="shadow appearance-none rounded w-full mt-2 mb-3 py-2 px-3 text-white placeholder-gray-300 bg-gradient-to-b from-white/6 to-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  id="numberofGuests"
                  onChange={handleGuestsSelect}>
                    <option value="25">0-50</option>
                    <option value="75">50-100</option>
                    <option value="150">100-200</option>
                    <option value="350">200-500</option>
                    <option value="750">500-1000</option>
                    <option value="1500">1000+</option>
                </select>
                <label htmlFor="venueSize" className='text-gray-200 text-lg'>
                  Size of the Venue(approximate):</label>
                <select
                  title="Venue Size"
                  className="shadow appearance-none rounded w-full mt-2 mb-3 py-2 px-3 text-white placeholder-gray-300 bg-gradient-to-b from-white/6 to-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  id="venueSize"
                  onChange={handleGuestsSelect}>
                    <option value="25">0-50</option>
                    <option value="75">50-100</option>
                    <option value="150">100-200</option>
                    <option value="350">200-500</option>
                    <option value="750">500-1000</option>
                    <option value="1500">1000+</option>
                </select>
            </div>

            <div>
                <h1 className="text-2xl text-white/90 text-center font-bold">SOUNDS</h1>
                <hr className="mb-4 w-1/4 mx-auto border-t-2 border-gray-200/40" />
                <label htmlFor="numberofGuests" className='text-gray-200 text-lg'>
                  Expected Guests:</label>
                <select
                  title="Expected Guests"
                  className="shadow appearance-none rounded w-full mt-2 mb-3 py-2 px-3 text-white placeholder-gray-300 bg-gradient-to-b from-white/6 to-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  id="numberofGuests"
                  onChange={handleGuestsSelect}>
                    <option value="25">0-50</option>
                    <option value="75">50-100</option>
                    <option value="150">100-200</option>
                    <option value="350">200-500</option>
                    <option value="750">500-1000</option>
                    <option value="1500">1000+</option>
                </select>
                <label htmlFor="venueSize" className='text-gray-200 text-lg'>
                  Size of the Venue(approximate):</label>
                <select
                  title="Venue Size"
                  className="shadow appearance-none rounded w-full mt-2 mb-3 py-2 px-3 text-white placeholder-gray-300 bg-gradient-to-b from-white/6 to-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  id="venueSize"
                  onChange={handleGuestsSelect}>
                    <option value="25">0-50</option>
                    <option value="75">50-100</option>
                    <option value="150">100-200</option>
                    <option value="350">200-500</option>
                    <option value="750">500-1000</option>
                    <option value="1500">1000+</option>
                </select>
            </div>

            <div>
                <h1 className="text-2xl text-white/90 text-center font-bold">LIGTING</h1>
                <hr className="mb-4 w-1/4 mx-auto border-t-2 border-gray-200/40" />
                <label htmlFor="numberofGuests" className='text-gray-200 text-lg'>
                  Expected Guests:</label>
                <select
                  title="Expected Guests"
                  className="shadow appearance-none rounded w-full mt-2 mb-3 py-2 px-3 text-white placeholder-gray-300 bg-gradient-to-b from-white/6 to-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  id="numberofGuests"
                  onChange={handleGuestsSelect}>
                    <option value="25">0-50</option>
                    <option value="75">50-100</option>
                    <option value="150">100-200</option>
                    <option value="350">200-500</option>
                    <option value="750">500-1000</option>
                    <option value="1500">1000+</option>
                </select>
                <label htmlFor="venueSize" className='text-gray-200 text-lg'>
                  Size of the Venue(approximate):</label>
                <select
                  title="Venue Size"
                  className="shadow appearance-none rounded w-full mt-2 mb-3 py-2 px-3 text-white placeholder-gray-300 bg-gradient-to-b from-white/6 to-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  id="venueSize"
                  onChange={handleGuestsSelect}>
                    <option value="25">0-50</option>
                    <option value="75">50-100</option>
                    <option value="150">100-200</option>
                    <option value="350">200-500</option>
                    <option value="750">500-1000</option>
                    <option value="1500">1000+</option>
                </select>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
