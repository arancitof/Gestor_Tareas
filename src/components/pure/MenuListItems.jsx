import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material/List'
import { HomeIcon, Settings, TaskIcon } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';


/** Función para iterar un elemento de la lista y que cargue un icono en concreto*/
const getIcon = () => {
    switch (icon) {
        case 'Home':
            return (<HomeIcon />)
        case 'Task':
            return (<TaskIcon />)
        case 'Settings':
            return (<Settings />)
        default:
            return (<HomeIcon />)
    }
};

/* Lista de Opciones */
const MenuListItems = ({ list }) => {
    const navigate = useNavigate();

    const navigateToItem = (path) => {
        navigate(path)
    };

    return (
        <List>
            {list.map(({ text, path, icon }, index) =>
            (
                <ListItem key={index} button onClick={() => navigateToItem(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    )
}

export default MenuListItems;
