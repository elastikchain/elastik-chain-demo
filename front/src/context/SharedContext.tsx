const setSelectedProject = (projectPayload: any) => {
    localStorage.setItem('selectedProject', JSON.stringify(projectPayload));
}

const getSelectedProject = () => {
    const res = localStorage.getItem('selectedProject');
    return res ? JSON.parse(res) : undefined;
}

export {setSelectedProject, getSelectedProject};