import { Subject } from '../utils/subject';

const onNavigation = new Subject();
const navigate = (newRoute) => onNavigation.emit(newRoute);


export let NavigationService = {
    onNavigation,
    navigate
}