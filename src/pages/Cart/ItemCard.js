import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteItem, markCourseCompleted } from "../../redux/udaDevSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleMarkCompleted = (courseId) => {
    dispatch(markCourseCompleted(courseId));
  };

  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32" src={item.image} alt="Course Thumbnail" />
        <div>
          <h1 className="font-titleFont font-semibold">{item.courseName}</h1>
          <p>Instructor: John Doe</p>
        </div>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div
              className="bg-green-500 h-full rounded-full"
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
          <span className="ml-2 font-semibold">75%</span>
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          {item.status === "open" && (
            <span className="text-yellow-500 font-semibold">Open</span>
          )}
          {item.status === "in_progress" && (
            <span className="text-blue-500 font-semibold">In Progress</span>
          )}
          {item.status === "completed" && (
            <span className="text-green-500 font-semibold">Completed</span>
          )}
          {!item.completed && (
            <button
              onClick={() => handleMarkCompleted(item._id)}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
            >
              Mark Completed
            </button>
          )}
          {item.completed && (
            <span className="text-green-500 font-semibold">Completed</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;