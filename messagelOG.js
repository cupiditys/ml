function E(o) {
    window.enmity.plugins.registerPlugin(o)
}

function T(o) {
    window.enmity.plugins.installPlugin(o)
}

function _(o, s) {
    return window.enmity.modules.getModule(o, s)
}

function c(...o) {
    return window.enmity.modules.getByProps(...o)
}
window.enmity.modules.common;

function v(o) {
    return window.enmity.patcher.create(o)
}
var F = "Message Logger",
    M = "1.3.6",
    A = 'Read the name..',
    N = [{
        name: "cupiditys",
        id: "686310058124247056"
    }],
    b = "#ff0069",
    C = "https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/NoDelete.js",
    p = {
        name: F,
        version: M,
        description: A,
        authors: N,
        color: b,
        sourceUrl: C
    };

function l(o) {
    return window.enmity.assets.getIDByName(o)
}
window.enmity.modules.common.Constants, window.enmity.modules.common.Clipboard, window.enmity.modules.common.Assets, window.enmity.modules.common.Messages, window.enmity.modules.common.Clyde, window.enmity.modules.common.Avatars, window.enmity.modules.common.Native;
const u = window.enmity.modules.common.React;
window.enmity.modules.common.Dispatcher, window.enmity.modules.common.Storage, window.enmity.modules.common.Toasts, window.enmity.modules.common.Dialog, window.enmity.modules.common.Token, window.enmity.modules.common.REST, window.enmity.modules.common.Settings, window.enmity.modules.common.Users, window.enmity.modules.common.Navigation, window.enmity.modules.common.NavigationNative, window.enmity.modules.common.NavigationStack, window.enmity.modules.common.Theme, window.enmity.modules.common.Linking, window.enmity.modules.common.StyleSheet, window.enmity.modules.common.ColorMap, window.enmity.modules.common.Components, window.enmity.modules.common.Locale, window.enmity.modules.common.Profiles, window.enmity.modules.common.Lodash, window.enmity.modules.common.Logger, window.enmity.modules.common.Flux, window.enmity.modules.common.SVG, window.enmity.modules.common.Scenes;
const {
    components: e
} = window.enmity;
e.Alert, e.Button, e.FlatList, e.Image, e.ImageBackground, e.KeyboardAvoidingView, e.Modal, e.Pressable, e.RefreshControl;
const P = e.ScrollView;
e.SectionList, e.StatusBar, e.StyleSheet, e.Switch, e.Text, e.TextInput, e.TouchableHighlight, e.TouchableOpacity, e.TouchableWithoutFeedback, e.Touchable, e.View, e.VirtualizedList, e.Form, e.FormArrow, e.FormCTA, e.FormCTAButton, e.FormCardSection, e.FormCheckbox, e.FormDivider, e.FormHint, e.FormIcon, e.FormInput, e.FormLabel, e.FormRadio;
const h = e.FormRow;
e.FormSection, e.FormSelect, e.FormSubLabel, e.FormSwitch, e.FormTernaryCheckBox, e.FormText, e.FormTextColors, e.FormTextSizes;
var L = ({
    pluginUrl: o
}) => u.createElement(h, {
    label: "Update Plugin",
    trailing: h.Arrow,
    onPress: () => {
        console.log(o), T(`${o}?${Math.floor(Math.random()*1001)}.js`)
    }
});
const w = v("NoDelete"),
    a = _(o => o.open !== void 0 && o.close !== void 0 && !o.openLazy && !o.startDrag && !o.init && !o.openReplay && !o.openChannelCallPopout),
    U = {
        ...p,
        patches: [],
        onStart() {
            let o = 0,
                s = 3;
            const g = () => {
                try {
                    o++;
                    const m = c("_currentDispatchActionType", "_subscriptions", "_actionHandlers", "_waitQueue"),
                        y = c("getMessage", "getMessages"),
                        S = c("getChannel", "getDMFromUserId");
                    console.log(`NoDelete delayed start attempt ${o}/${s}.`), a.open({
                        content: `NoDelete start attempt ${o}/${s}.`,
                        source: l("debug")
                    });
                    for (const i of ["MESSAGE_UPDATE", "MESSAGE_DELETE"]) try {
                        m.dispatch({
                            type: i,
                            message: {}
                        })
                    } catch (n) {
                        console.log("[NoDelete Dispatch Error]", n)
                    }
                    const f = m._actionHandlers._orderedActionHandlers.MESSAGE_DELETE.find(i => i.name === "MessageStore"),
                        D = m._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(i => i.name === "MessageStore");
                    w.before(f, "actionHandler", (i, n) => {
                        const t = y.getMessage(n[0].channelId, n[0].id);
                        if (n[0] = {}, !(t != null && t.editedTimestamp) || (t == null ? void 0 : t.editedTimestamp._isValid)) {
                            const r = {
                                type: "MESSAGE_UPDATE",
                                message: {
                                    ...t,
                                    edited_timestamp: "invalid_timestamp",
                                    content: t.content + " `[deleted]`",
                                    guild_id: S.getChannel(t.channel_id).guild_id
                                },
                                log_edit: !1
                            };
                            m.dispatch(r)
                        }
                    }), w.before(D, "actionHandler", (i, n) => {
                        var t, r;
                        try {
                            if (n[0].log_edit == !1) return;
                            const d = y.getMessage(n[0].message.channel_id, n[0].message.id);
                            if (!((r = (t = n[0]) == null ? void 0 : t.message) != null && r.content)) return;
                            try {
                                if (!n[0].edited_timestamp._isValid) return
                            } catch {}
                            n[0].message.content = d.content + " `[edited]`\n" + n[0].message.content;
                            return
                        } catch (d) {
                            console.log("[NoDelete Error]", d)
                        }
                    }), console.log("NoDelete delayed start successful."), a.open({
                        content: "NoDelete delayed start successful.",
                        source: l("Check")
                    })
                } catch (m) {
                    console.log("[NoDelete Plugin Error]", m), o < s ? (console.warn(`NoDelete failed to start. Trying again in ${o}0s.`), a.open({
                        content: `NoDelete failed to start trying again in ${o}0s.`,
                        source: l("ic_message_retry")
                    }), setTimeout(g, o * 1e4)) : (console.error("NoDelete failed to start. Giving up."), a.open({
                        content: "NoDelete failed to start. Giving up.",
                        source: l("Small")
                    }))
                }
            };
            setTimeout(() => {
                g()
            }, 300)
        },
        onStop() {
            w.unpatchAll()
        },
        getSettingsPanel({
            settings: o
        }) {
            return u.createElement(P, {
                settings: o
            }, u.createElement(L, {
                pluginUrl: p.sourceUrl
            }))
        }
    };
E(U);