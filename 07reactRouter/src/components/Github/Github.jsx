import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/his-helloworld")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
  return (
    <div className='bg-gray-600 text-center text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img width={250} height={10} src={data.avatar_url} alt="Git Picture" />
    </div>
  )
}

export default Github