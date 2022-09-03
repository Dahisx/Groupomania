import axiosInstance from "../../utils/axios";

const getPosts = async () => {
    const res = await axiosInstance.get("/post");
    return res;
};

const createPost = async (message,file) => {
    let formData = new FormData();
    if(file) {
        formData.append("image", file);
    }
    formData.append("message", message);
    const res = await axiosInstance.post("/post", formData,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    return res;
}

const deletePost = async (id) => {
    const res = await axiosInstance.delete(`/post/${id}`);
    return res;
}

const modifyPost = async (id, message,fileSelected) => {
    let formData = new FormData();
    formData.append("message", message);
    if(fileSelected) {
        formData.append("image", fileSelected);
    }
    const res = await axiosInstance.put(`/post/${id}`, formData,{headers: {
        "Content-Type": "multipart/form-data",
    }});
    return res;
}

const likePost = async (id) => {
    const res = await axiosInstance.put(`/post/${id}/like`, {like:1});
    return res;
}

const dislikePost = async (id) => {
    const res = await axiosInstance.put(`/post/${id}/like`, {like:-1});
    return res;
}


export {
    getPosts,
    createPost,
    likePost,
    dislikePost,
    deletePost,
    modifyPost
}
  