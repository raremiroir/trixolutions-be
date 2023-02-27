import mailchimp from '$lib/services/mailchimp';

export async function _post({ body }:any) {
    try {
        let data = await JSON.parse(body);
        let result = await mailchimp.registerEmail(data.email);
        return {
            status: result.status,
            body: result
        };
    } catch (error) {
        console.error(error);
    }
}