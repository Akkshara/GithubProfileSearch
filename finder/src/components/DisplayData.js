import React from "react";
function DisplayData({data}) {
  return (
    <>
      <div className="text-center  my-3">
        <h2>GITHUB PROFILE DETAILS</h2>
      </div>

      <table className="table table-hover my-5">
        <thead className="table-active">
          <tr className="">
            <th>sr.no</th>
            <th>details</th>
            <th>
              <img src="{data.avatar_url}" alt="image" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>2</th>
            <td>blog</td>
            <td>{data.blog}</td>
          </tr>
          <tr>
            <th>3</th>
            <td>location</td>
            <td>{data.location}</td>
          </tr>
          <tr>
            <th>4</th>
            <td>bio</td>
            <td>{data.bio}</td>
          </tr>
          <tr>
            <th>5</th>
            <td>public_repos</td>
            <td>{data.public_repos}</td>
          </tr>
          <tr>
            <th>6</th>
            <td>followers</td>
            <td>{data.followers}</td>
          </tr>
          <tr>
            <th>7</th>
            <td>following</td>
            <td>{data.following}</td>
          </tr>
          <tr>
            <th>8</th>
            <td>email</td>
            <td>{data.email}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default DisplayData;
