const loadInitialTemplate = () => {
    const template = `
    <h1>Usuarios</h1>
    <form id = "user-form">
    <div>
    <label>Nombre:</label>
    <input name="name" />
    </div> <br>
    <div>
    <label>Apellido:</label>
    <input name="lastname" />
    </div> <br>
    <button type="submit">Enviar Datos</button>
    <ul id="user-list"></ul>
    `
    const body = document.getElementsByTagName("body")[0]
    body.innerHTML = template
}

const addFormListener = () => {
    const userForm = document.getElementById("user-form")
    userForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(userForm)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
    await fetch("/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    userForm.reset()
    }
}

window.onload = () => {
    loadInitialTemplate()
    addFormListener()
}

