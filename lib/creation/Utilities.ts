import {ICreationData} from '../../lib/creation/Api';

export function checkCompleteness(_data: ICreationData): boolean {
    switch (_data.navStage) {
        case 0: {
            return _data.basicInformation.dao_name === '' ||
            _data.basicInformation.dao_url === '' ||
            _data.basicInformation.short_description === ''
        }
    }
}