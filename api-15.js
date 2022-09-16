const api = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios.post("https://it-kamasutra.com/students-need",
            { count: studentsCount })
            .then(res => res.data);
    },
    getVacanciesCountFromMicrosoft() {
        return axios.get("https://microsoft.com")
            .then(res => res.data);
    },
    getVacanciesCountFromGoogle() {
        return axios.get("https://google.com")
            .then(res => res.data);
    }
}