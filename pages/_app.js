import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Home</a>
          <a className="navbar-brand" href="/tasks/create">Create Task</a>
          <a className="navbar-brand" href="/tasks/manage">Manage Tasks</a>
          <a className="navbar-brand" href="/posts/first-post">First Post</a>
          <a className="navbar-brand" href="/api/hello">Users</a>
          <br></br>
        </div>
      </nav>
      <br></br>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
