const setSelectedProject = (project: any) => {
    localStorage.setItem('selectedProject', JSON.stringify(project));
}

const getSelectedProject = () => {
    const res = localStorage.getItem('selectedProject');
    return res ? JSON.parse(res) : undefined;
}

const setSelectedSubmission = (submission: any) => {
    localStorage.setItem('selectedSubmission', JSON.stringify(submission));
}

const getSelectedSubmission = () => {
    const res = localStorage.getItem('selectedSubmission');
    return res ? JSON.parse(res) : undefined;
}

export {
    setSelectedProject, 
    getSelectedProject,
    setSelectedSubmission,
    getSelectedSubmission
};