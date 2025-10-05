import Hello from "../components/hello"

export default async function Home(){

  console.log('what am I? -- SERVER/CLIENT?')

  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if(!response.ok) throw new Error("Failed to fetch data");
  const albums = await response.json();

  return(
    // <>
    // <h1>Welcome to Next JS</h1>
    // <Hello/>
    // </>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
      {albums.map((album: {id: number, title: string}) =>(
        <div key={album.id}>
          <h3>{album.title}</h3>
          <p>{album.id}</p>
        </div>
      ))}

    </div>
  )
}