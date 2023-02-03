import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

export default function () {

    const {getAccessTokenSilently} = useAuth0()

    const [url, urlSet] = useState(null)
    const [comments, commentSet] = useState([])
    const [text, textSet] = useState("")

    const fetchComnment = async () => {
        const query = new URLSearchParams({url})
        const newUrl = `/api/comment?${query.toString()}`
        const response = await fetch(newUrl, {
            method: 'GET'
        })
        const data = await response.json();
        commentSet(data)
    }
    useEffect(() => {
        if (!url) return
        fetchComnment()
    })
    useEffect(() => {
        const url = window.location.origin + window.location.pathname
        urlSet(url)
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()

        const userToken = await getAccessTokenSilently()

        //text, user, url
        await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({text, userToken, url}),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        fetchComnment()
        textSet("")
    }

    return [comments, onSubmit, text, textSet]
}