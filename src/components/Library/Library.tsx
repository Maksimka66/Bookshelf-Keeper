import { Loader } from '@/shared/Loader/Loader';
import { useLogoutMutation } from '@/store/features/auth/authApi';

export const Library = () => {
    const [logoutUser, { isLoading }] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logoutUser({});
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <div>
            <p>I`m loginned</p>
            <button type='button' onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};
