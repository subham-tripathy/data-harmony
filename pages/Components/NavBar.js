import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import studentNames from './studentsName';


const NavBar = () => {
  const [dhuser, setdhuser] = useState(null)

  useEffect(() => {

    function getCookie(name) {
      const cookieString = document.cookie;
      const cookies = cookieString.split(";").map(cookie => cookie.trim());
      for (const cookie of cookies) {
        if (cookie.startsWith(name + "=")) {
          return cookie.substring(name.length + 1);
        }
      }
      return null;
    }
    let a = getCookie('dhuser')
    setdhuser(a)
    

    







    // const Search = document.querySelector('input#search')
    // const searchedValues = document.querySelector('#searchedValues')
    // Search.addEventListener('keyup', () => {
    //   if (Search.value === '') {
    //     searchedValues.classList.remove('flex')
    //     searchedValues.classList.add('hidden')
    //   }
    //   else {
    //     let studentNames = []
    //     let students = []
    //     searchedValues.classList.remove('hidden')
    //     searchedValues.classList.add('flex')
    //     const searchValue = Search.value.toLowerCase();
    //     fetch('/api/allstudents').then(res => res.json()).then(data => {
    //       for (const key in data) {
    //         if (Object.hasOwnProperty.call(data, key)) {
    //           const element = data[key];
    //           console.log(element.name);
    //           studentNames.push(element.name)
    //           students.push(element)
    //           const filteredArray = studentNames.filter(item => item.toLowerCase().includes(searchValue));
    //           searchedValues.classList.remove('hidden')
    //           searchedValues.innerHTML = ''
    //           filteredArray.forEach(item => {
    //             const link = document.createElement('a')
    //             const studentId = students.find(student => student.name === item).regn_no;
    //             link.href = '/student?id=' + studentId
    //             link.className = 'bg-cyan-500 text-white rounded w-[90%] mx-auto shadow shadow-black'
    //             link.textContent = item
    //             searchedValues.appendChild(link)
    //           });
    //         }
    //       }
    //     });
    //   }
    // })
  });


  return (
    <div className='pl-5 pr-10 py-5 flex items-center justify-between'>
      <Link href={'/'}><h1 className='text-3xl font-bold dark:text-white hover:text-cyan-500'>Data Harmony</h1></Link>
      <div className='flex items-center'>
        {/* <input id='search' type='search' className='p-1 w-96 rounded border-2 border-cyan-500 dark:text-black font-semibold pl-3' placeholder='Search...' /> */}
        {/* <div id="searchedValues" className='hidden fixed top-16 flex-col w-96 space-y-5 bg-slate-400 py-5 rounded border-4 border-white shadow-lg shadow-black'></div> */}
      </div>
      <ul className='flex items-center space-x-3'>
        <Link className='text-xl hover:bg-cyan-500 text-white px-3 py-1 rounded font-bold text-shadow-sm' href={'/'}><li>Home</li></Link>


        {
          dhuser ?
            (
              <>
                <Link className='text-xl hover:bg-cyan-500 text-white px-3 py-1 rounded font-bold text-shadow-sm' href={'/'}>Hi, {dhuser}</Link>
                <Link className='text-xl hover:bg-cyan-500 text-white px-3 py-1 rounded font-bold text-shadow-sm' href={'/logout'}>Logout</Link>
              </>
            )
            :
            (<Link className='text-xl hover:bg-cyan-500 text-white px-3 py-1 rounded font-bold text-shadow-sm' href={'/login'}>Sign In</Link>)
        }



        <Link className='text-xl hover:bg-cyan-500 text-white px-3 py-1 rounded font-bold text-shadow-sm' href={'/about'}><li>About</li></Link>
      </ul>
    </div>
  )
}

export default NavBar