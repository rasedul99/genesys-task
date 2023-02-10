import React from "react";

const UserList = () => {
  const userDetails = [
    {
      firstName: "rasedul",
      LastName: "Islam",
      Email: "rasedul@gmail.com",
      password: 12345,
    },
    {
      firstName: "Noam",
      LastName: "Islam",
      Email: "noman@gmail.com",
      password: 12345,
    },
    {
      firstName: "Sharnali",
      LastName: "Islam",
      Email: "sharnali@gmail.com",
      password: 12345,
    },
    {
      firstName: "kamrul",
      LastName: "Islam",
      Email: "kamrul@gmail.com",
      password: 12345,
    },
  ];
  return (
    <div className="bg-white m-[100px]">
      <div className="flex flex-col">
        <h3 className="text-[28px]">User list</h3>
        <div>
          <div className="flex justify-between border-solid border-[#D2D2D2] border-b py-6">
            <p>Fisrt Name</p>
            <p>Last Name</p>
            <p>Email</p>
            <p>Password</p>
          </div>
          {userDetails.map((user) => {
            return (
              <div className="flex justify-between  border-solid border-[#D2D2D2] border-b py-6">
                <p>{user.firstName}</p>
                <p>{user.LastName}</p>
                <p>{user.Email}</p>
                <p>{user.password}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-solid border-[#D2D2D2] border-b py-6 text-2xl font-semibold">
        {userDetails.length} User
      </div>
    </div>
  );
};

export default UserList;
