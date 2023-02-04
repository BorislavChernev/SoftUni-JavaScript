function constructionCrew(worker = {}) {
    if (worker.dizziness === true) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}