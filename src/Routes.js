import { Main } from './main/Main';
import { PersonRounded, SportsMma } from '@material-ui/icons';
import { Combat } from './combat/Combat';

const Routes = [
    {
        path: '/',
        sidebarName: 'Main',
        iconComponent: PersonRounded,
        component: Main
    },
    {
        path: '/combat',
        sidebarName: 'Combat',
        iconComponent: SportsMma,
        component: Combat
    }
];

export default Routes;