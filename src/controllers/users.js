let users = [
    {
        "id": 1,
        "fullName": "spiderman",
        "email": "spiderman@gmail.com"
      },
      {
        "id": 2,
        "fullName": "Haris"
      },
      {
        "id": 3,
        "fullName": "surti",
        "email": "surti@gmail.com"
      }
];

exports.getUsers = (req, res) => {
    res.send({
        status: "succcess",
        message: "Response Success",
        data: {
            users,
        },
    });
};