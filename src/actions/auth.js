
/** 
 * Sample Action
 * This action will remove a node based on authentication rules
 * 
 */
const userRole = "admin";

export function auth(node, roles) {

    console.log({ node, roles });
    const possibleRoles = roles.split("|") || [];
    const canAccess = possibleRoles.indexOf(userRole) !== -1;

    const old = node.style.display;
    if (!canAccess)
        node.style.display = "none"

    return {
        destroy() {
            node.style.display = old;
        }
    }
}


