import Event from "@/components/Event"
import TaskList from "@/components/TaskList"

const Next7Days = () => {
  const next7DaysTasks = [
      { title: 'Read the report', project: 'Personal', done: true },
      { title: 'Write the report', project: 'Work', done: false },
      { title: 'Read the report', project: 'Shopping', done: false },
  ];

  return (
    <main className="container mx-auto">
      <div className="flex flex-col mt-20 lg:mt-0 lg:flex-row lg:ml-64">
        <section id="main" className="lg:w-3/5 2xl:w-3/5 m-4">
          <TaskList headerTitle={"Next 7 Days Tasks"} data={next7DaysTasks} />
          <div className="fixed w-full left-0 lg:left-auto lg:w-2/5 pt-10 pb-4 bottom-0 bg-gradient-to-t from-white">
            <div className="w-full flex justify-center">
              <button className="flex items-center py-2 px-5 rounded-3xl bg-gray-300 hover:bg-gray-200 font-bold text-gray-700">
                <svg
                  className="text-gray-700 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                </svg>
                Add task
              </button>
            </div>
          </div>
        </section>
        <section id="sidebar" className="lg:w-2/5 2xl:w-1/5 m-4">
          <Event />
        </section>
      </div>
    </main>
  )
}

export default Next7Days