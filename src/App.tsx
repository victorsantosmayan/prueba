
function App() {

  const user = "hugo"
  
  return (
    <div className="w-full  bg-nature-900">
	<main className="w-full px-4">
	  <form>
          <input placeholder="Escribe una tarea" autoComplete="off" />
        </form>
        <div>
          <article className="">
            <p>Tarea uno</p>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
