import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/getPageCount";
import {usePosts} from "../hooks/usePosts";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/myModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";


const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)


    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const res = await PostService.getAll(limit, page)
        setPosts(res.data)
        const totalCount = res.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }
    return (
        <div>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Create user
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Post List'}/>
            }
            <Pagination page={page}
                        totalPages={totalPages}
                        changePage={changePage}
            />
        </div>
    );
};

export default Posts;