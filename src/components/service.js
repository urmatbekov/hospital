class Service {
    BASE_URL = "https://nurkadyr.pythonanywhere.com"

    request = async (url = "/", data = {}, method = "GET") => {
        const res = await fetch(`${this.BASE_URL}${url}`, {
            headers: {
                "Content-type": "application/json"
            },
            method,
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            const err = (new Error(res.statusText ? res.statusText : res.status))
            err.res = res
            throw err
        }

        return await res.json()
    }

    createUser = async (data) => {
        return await this.request('/auth/users/', data,"POST")
    }

}

export default Service