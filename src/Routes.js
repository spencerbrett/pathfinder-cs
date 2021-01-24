import { Profile } from './profile/Profile';
import { PersonRounded, BallotRounded } from '@material-ui/icons';
import { AbilityScores } from './abilityScores/AbilityScores';

const Routes = [
    {
        path: '/',
        sidebarName: 'Profile',
        iconComponent: PersonRounded,
        component: Profile
    },
    {
        path: '/abilities',
        sidebarName: 'Ability Scores',
        iconComponent: BallotRounded,
        component: AbilityScores
    }
];

export default Routes;