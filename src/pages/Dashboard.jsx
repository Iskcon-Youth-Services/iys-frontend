import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <div className="h-screen w-20 fixed top-0 left-0">
        <Sidebar />
      </div>
    </>
  );
}

export default Dashboard;
