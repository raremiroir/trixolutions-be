// import mailchimp from '$lib/services/mailchimp';

// export async function _post({ body }:any) {
//     try {
//         let data = await JSON.parse(body).catch((err:any) => {
//             console.log(err);
//         })
//         let result = await mailchimp.registerEmail(data.email).catch((err:any) => {
//             console.log(err);
//         });
//         return {
//             status: result.status,
//             body: result
//         };
//     } catch (error) {
//         console.error(error);
//     }
// }