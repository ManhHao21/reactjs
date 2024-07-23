import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/userSlice";

const EditPage = (props) => {
  const { setEdit } = props;
  const editPage = [
    "https://png.pngtree.com/png-vector/20240325/ourlarge/pngtree-cute-anime-girl-with-headphone-for-customer-service-icon-vector-illustration-png-image_12229384.png",
    "https://i.pinimg.com/736x/ac/ce/4d/acce4d12026b2744fb711d68de20b3b9.jpg",
    "https://e7.pngegg.com/pngimages/874/684/png-clipart-customer-service-cartoon-cartoon-man-customer-service-cartoon-character-comics.png",
    "https://w7.pngwing.com/pngs/497/480/png-transparent-customer-service-illustration-cute-anchor-technic-human-cartoon.png",
    "https://qph.cf2.quoracdn.net/main-qimg-28ec4dcaca13a7b70247956c93b2c87b-lq",
  ];
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [des, setDes] = useState(user.about);
  const [image, setImage] = useState(user.avatar);
  const [color, setColor] = useState(user.color);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const info = {
      name: name,
      age: age,
      avatar: image,
      about: des,
      color: color,
    };
    dispatch(update(info));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="info-container container align-items-center"
      >
        <div className="edit-container d-flex justify-content-end">
          <button className="btn btn-primary">SAVE</button>
        </div>
        <div className="edit-profile fs-4 fw-bold text-uppercase">
          edit Profile
        </div>
        <div className="input-container">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>About</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={des}
                onChange={(e) => setDes(e.target.value)}
              />
            </Form.Group>
            <div className="input-image-container">
              <label className="fs-4 fw-bold text-uppercase">
                Profile picture
              </label>
              <div className="d-flex flex-wrap" style={{ columnGap: 20 }}>
                {editPage.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      className="img-avatar "
                      style={{ width: 200, height: 200 }}
                      onClick={() => setImage(item)}
                    />
                  );
                })}
              </div>
              <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
              <Form.Control
                type="color"
                id="exampleColorInput"
                value={color}
                title="Choose your color"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </Form>
        </div>
      </form>
    </>
  );
};

export default EditPage;
