import { useLogoutMutation } from '@/store/features/auth/authApi';

export const Library = () => {
    const [logoutUser] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logoutUser({});
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <p>I`m loginned</p>
            <button type='button' onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};
